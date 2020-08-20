class FriendlyCatsDoNotExist < RuntimeError 
end


class Dog 
    attr_accessor :name 
    
    def initialize(name)
        @name = name
    end


    # def name 
    #     @name
    # end

    # def name=(new_name)
    #     @name = new_name
    # end

    def encounter_cat(cat)
        # if cat.is_friendly? 
        #     # self.play
        #     raise FriendlyCatsDoNotExist
        # else
        #     run
        # end
        self.name = "Lina"
        return nil 
    end


    private
    def play 
        "PLAY"
    end

    def run 
        "RUN"
    end
end

