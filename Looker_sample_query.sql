select API_String, adomain, placement_type, Delivery_count from (
    SELECT 
        winner_account_id,
        creative_id, 
        CONCAT('"',winner_account_id,'_',creative_id,'",') API_String,
        adomain,
        placement_type,
        DATE_TRUNC('day', Min_Date) First_date_Live,EXTRACT(day FROM CURRENT_DATE - DATE_TRUNC('day', Min_Date)) Days_Diff,
        CASE 
            WHEN EXTRACT(day FROM CURRENT_DATE - DATE_TRUNC('day', Min_Date)) < 7 THEN '<7 days old'
            WHEN EXTRACT(day FROM CURRENT_DATE - DATE_TRUNC('day', Min_Date)) >=7  THEN '>=7 days old' 
        END AS TTL_bucket,
        Delivery_count
    from (
        SELECT 
            creative_id,
            winner_account_id,
            adomain,
            placement_type,
            Min(txn_time) As Min_Date,
            COUNT(*) As Delivery_count
        FROM 
            dmx.bi.fct_edsp_transaction_events
        where 
            txn_time >=  ((DATE_ADD('day', -29, CAST(CAST(DATE_TRUNC('DAY', NOW()) AS DATE) AS TIMESTAMP)))) 
            AND txn_time < ((DATE_ADD('day', 30, DATE_ADD('day', -29, CAST(CAST(DATE_TRUNC('DAY', NOW()) AS DATE) AS TIMESTAMP)))))
            --timestamp '2024-07-01'
        GROUP BY 1,2,3,4
    )
    WHERE adomain = 'advertiser.com'
    AND winner_account_id = 'id')
--where TTL_bucket = '<7 days old'
--and placement_type = 'video'