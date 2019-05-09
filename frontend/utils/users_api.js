export const requestUser = id => (
    $.ajax({
        method: `get`,
        url: `api/users/${id}`
    })
);