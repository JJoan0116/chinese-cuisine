const mysql = require('mysql2/promise')

const func = async () => {
  const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1qaz@WSX',
    database: 'kings',
    // 现在没有可用连接了，那就等待，设置为 false 就是直接返回报错。
    waitForConnections: true,
    // 最多有多少个连接
    connectionLimit: 10,
    // 最多有多少个空闲的
    maxIdle: 10,
    // 空闲的连接多久会断开
    idleTimeout: 60000,
    // 可以排队的请求数量，超过这个数量就直接返回报错说没有连接了。设置为 0 就是排队没有上限。
    queueLimit: 0,
    // 保持心跳
    enableKeepAlive: true,
    // 保持心跳
    keepAliveInitialDelay: 0,
  })

  const [results] = await pool.query('select * from customers')
  console.log(results)
}

func()
// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: '1qaz@WSX',
//   database: 'kings',
// })

// connection.query(
//     'SELECT * FROM customers',
//     function(err, results, fields) {
//       console.log(results);
//       console.log(fields.map(item => item.name));
//     }
//   );

// connection.query(
//     'SELECT * FROM customers WHERE name LIKE ?',
//     ['李%'],
//     function(err, results, fields) {
//         console.log(results);
//         console.log(fields.map(item => item.name));
//     }
// );

// connection.execute('INSERT INTO customers (name) VALUES (?)',
//     ['光'], (err, results, fields) => {
//     console.log(err);
// });

// connection.execute('UPDATE customers SET name="guang" where name="光"',
//     (err) => {
//         console.log(err);
//     });

// connection.execute('DELETE  FROM customers where name=?',
//     ['guang'],
//     (err) => {
//         console.log(err);
//     });
