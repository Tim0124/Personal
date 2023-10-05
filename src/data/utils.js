//format text
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

//format date
export function formatDate(date) {
  return new Date(date).toLocaleDateString('zh-TW', {
    timeZone: "GMT"
  })
}

//format blog posts
export function formatBlogPosts(posts, {
  filterOutDrafts = true, //過濾草稿
  filterOutFuturePosts = true, //過濾貼文
  sortByDate = true, //按照日期排序
  limit = undefined
} = {}) {

  const filteredPosts = posts.reduce((acc, post) => {
    const {date, draft } = post.frontmatter
    //過濾草稿
    if(filterOutDrafts && draft) return acc

    //過濾未來的貼文
    if(filterOutFuturePosts && new Date(date) > new Date()) return acc
    
    //將post增加到acc
    acc.push(post)

    return acc
  },[])

  //按日期或隨機排序
  if(sortByDate) {
    filteredPosts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date) )
  } else {
    filteredPosts.sort(() => Math.random() - 0.5)
  }

  if(typeof limit === 'number') {
    return filteredPosts.slice(0, limit)
  }
  return filteredPosts
}