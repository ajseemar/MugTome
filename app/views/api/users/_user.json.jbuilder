json.extract! user, :id, :first_name, :last_name, :email#, url_for(:avatar)
json.avatar url_for(user.avatar)
