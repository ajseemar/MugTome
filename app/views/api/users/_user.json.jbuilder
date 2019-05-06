json.extract! user, :id, :first_name, :last_name, :email
if user.avatar.attached?
    json.avatar url_for(user.avatar)
else
    if user.gender == "Male"
        json.avatar image_url('dm.jpg')
    else
        json.avatar image_url('df.jpg')
    end
end
