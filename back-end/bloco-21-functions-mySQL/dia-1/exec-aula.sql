-- Active: 1660154412601@@127.0.0.1@3306@sakila

# Média de dias que uma pessoa usuária permanece com o produto alugado
SELECT FLOOR(AVG(DATEDIFF(return_date, rental_date))) AS `média de dias` FROM rental;

# Tempo máximo, mínimo e a média de tempo dos filmes lançados em 2006 por rating
SELECT MAX(length), MIN(length), AVG(length) FROM film
  GROUP BY release_year
    HAVING release_year = 2006;
    
# Quantas pessoas usuárias temos por cidade?
SELECT city_id, COUNT(*) FROM address
  GROUP BY city_id;

# Qual o valor total recebido dentro de cada mês?
SELECT SUM(amount) AS `valor total mensal`, MONTH(payment_date) AS `mês` FROM payment
  GROUP BY `mês`;

# Quantidade de itens alugados pelo preço
SELECT amount, COUNT(*) FROM payment
GROUP BY amount;

# Qual valor total arrecadado agrupado por mês, ano e `amount`?
SELECT 
    amount, 
    SUM(amount) as `soma`, 
    year(payment_date), 
    month(payment_date) 
  FROM sakila.payment
  GROUP BY 
    amount, year(payment_date), month(payment_date)
  ORDER BY year(payment_date), month(payment_date), amount;