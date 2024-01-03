import mysql from "mysql2";

const getOrders = async () => {
  const connection = mysql.createConnection({
    host: process.env.WP_DB_HOST,
    user: process.env.WP_DP_USER,
    password: process.env.WP_DB_PASS,
    database: process.env.WP_DB,
  });

  try {
    await connection.connect();

    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT
        p.ID AS order_id,
        pm.meta_value AS customer_id,
        pm2.meta_value AS customer_email,
        p.post_status AS order_status,
        p.post_date AS order_date,
        p.post_modified AS order_modified
      FROM wp_posts AS p
      INNER JOIN wp_postmeta AS pm ON p.ID = pm.post_id AND pm.meta_key = '_customer_user'
      INNER JOIN wp_postmeta AS pm2 ON p.ID = pm2.post_id AND pm2.meta_key = '_billing_email'
      WHERE p.post_type = 'shop_order';`,
        function (err, results, fields) {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  } finally {
    connection.end();
  }
};

export default getOrders;
