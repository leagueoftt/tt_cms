ActiveRecord::Base.establish_connection(ENV['DATABASE_URL']||"sqlite3:db/development.db")

class User < ActiveRecord::Base
    has_secure_password
end

class Article < ActiveRecord::Base
end
————
