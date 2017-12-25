const Mock = require('mockjs')
const Random = Mock.Random

let lists =  Mock.mock({
    'lists|10-50': [{
        'key|+1': 1,
        'time|1': Random.datetime('yyyy-MM-dd HH:mm:ss'),
        'status|1': ['已处理' , '未处理' , '处理中' , '已删除'],
        'errorInfo|1': Random.csentence( 5, 10 )
    }]
})

export const dataSource = lists.lists

export const userInfo = Mock.mock({
    'name': Random.character( 'lower/upper/number/symbol' ),
    'password': Random.character( 'lower/upper/number/symbol' )
})





