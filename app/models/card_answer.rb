class CardAnswer < ActiveRecord::Base
  belongs_to :card_question
  belongs_to :answer

  validates :value,
            :answer,
            :card_question,
            :presence => true
end
