Paperclip.interpolates :company do |attachment, style|
  attachment.instance.upload_company_name
end

Paperclip.interpolates :date do |attachment, style|
  attachment.instance.upload_date
end

