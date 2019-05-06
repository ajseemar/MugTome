json.extract! user, :id, :first_name, :last_name, :email
json.avatar url_for(user.avatar)
