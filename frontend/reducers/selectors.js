export const selectPosts = ({ posts }, { feedPostIds }) => { return(
    feedPostIds.map(id => posts[id])
)};