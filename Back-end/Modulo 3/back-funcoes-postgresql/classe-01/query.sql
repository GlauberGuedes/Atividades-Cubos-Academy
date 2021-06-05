--1)
SELECT count(medicamento) AS "quantidade de medicamento" FROM farmacia;
--2)
SELECT MIN(idade) as idade FROM usuarios;
--3)
SELECT MAX(idade) as idade FROM usuarios;
--4)
SELECT ROUND(AVG(idade), 3) FROM usuarios WHERE idade >= 18;
--5)
SELECT SUM(estoque) FROM farmacia WHERE categoria = 'blue' OR categoria = 'black';
--6)
SELECT categoria, SUM(estoque) AS estoque FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;
--7)
SELECT categoria, SUM(estoque) AS estoque FROM farmacia WHERE categoria IS NULL GROUP BY categoria;
--8)
SELECT categoria, COUNT(medicamento) AS quantidade FROM farmacia WHERE categoria IS NULL GROUP BY categoria;
--9)
SELECT CONCAT(medicamento,'  (', categoria, ')') AS "medicamento e categoria" FROM farmacia WHERE categoria IS NOT NULL;
--10)
SELECT CONCAT(id, ' - ', medicamento, ' (', COALESCE(categoria, 'sem categoria'), ')') FROM farmacia;
--11)
SELECT nome, idade, cadastro::date FROM usuarios WHERE cadastro BETWEEN '2020-01-01' AND '2021-01-01'; -- ou cadastro like '2020%'
--12)
SELECT nome, idade, email, AGE(cast(cadastro AS timestamp)) AS tempo FROM usuarios WHERE idade < 18;
--13)
SELECT nome, idade, email, AGE(cast(cadastro AS date)) AS tempo FROM usuarios WHERE idade >= 60;
--14)
SELECT categoria, COUNT(medicamento) AS quantidade FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;
--15)
SELECT idade, COUNT(idade) AS quantidade FROM usuarios WHERE idade >= 18 GROUP BY idade;
--16)
SELECT categoria, SUM(estoque) FROM farmacia GROUP BY categoria LIMIT 3;