import request from '@/utils/request'

// 测试
export function getTopBar() {
    return request({
        url: '/api/home/get_topbar',
        headers: {
            isToken: false
        },
        method: 'get',
    })
}
