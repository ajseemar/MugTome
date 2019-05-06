json.extract! user, :id, :first_name, :last_name, :email
if user.avatar.attached?
    json.avatar url_for(user.avatar)
end
