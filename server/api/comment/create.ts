// 发布评论（Token）
export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event)
    const body = await readBody(event)
    const data: any = await $fetch("/comment", {
        baseURL: 'http://127.0.0.1:8000/v1',
        method: 'POST',
        body: body,
        headers: cookie
    })
    return data.data
})