CREATE TABLE expenses (
  id int(11) AUTO_INCREMENT PRIMARY KEY not null,
  date int(11),
  category text not null,
  description text not null,
  price int(11)
)

INSERT INTO expenses (date, category, description, price) VALUES ('$date', '$category', '$description', '$price');
