class CardAnswer < ActiveRecord::Base
  belongs_to :card_question
  belongs_to :answer
end
