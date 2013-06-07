class Event < ActiveRecord::Base
  validates :organizer_name, :organizer_email, :title, :date, presence: true
  validates :title, uniqueness: true
  # validate  :date_must_have_correct_format
  validate  :date_must_not_be_in_past
  validate  :email_address_must_be_valid

  protected

  def date_must_have_correct_format
    unless Date.parse(self.date)
      errors.add(:date, "is not in the correct format (YYYY-MM-DD)")
    end
  end

  def date_must_not_be_in_past
    if !self.date.blank? and self.date < Date.today
      errors.add(:date, "cannot be in the past")
    end
  end

  def email_address_must_be_valid
    unless self.organizer_email =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
      errors.add(:organizer_email, "is not in the correct format (name@example.com)")
    end
  end
end
