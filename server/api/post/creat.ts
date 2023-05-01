// 发布动态
export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event)
    const body = await readBody(event)
    const data: any = await $fetch("/post", {
        baseURL: useRuntimeConfig().apiBase,
        method: 'POST',
        body: body,
        headers: cookie
    })
    return data?.data ?? null
})
