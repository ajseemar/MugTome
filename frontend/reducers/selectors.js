export const selectPosts = ({ posts }, { feedPostIds }) => { 
    const output = [];
    feedPostIds.map(id => {
        if(posts[id]) return output.push(posts[id]);
    });
    return output;
};