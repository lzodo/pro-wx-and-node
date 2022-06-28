import request from '@/utils/request'

// 测试
export function login(username, password, code, uuid) {
    const data = {
        username,
        password,
        code,
        uuid
    }
    return request({
        url: '/login',
        headers: {
            isToken: false
        },
        method: 'post',
        data: data
    })
}