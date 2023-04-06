CREATE TABLE IF NOT EXISTS hatchdb.tasks (
	id BIGINT auto_increment NOT NULL,
	label VARCHAR(100) NOT NULL,
	done BOOL DEFAULT false NOT NULL,
	CONSTRAINT tasks_PK PRIMARY KEY (id)
);

insert into tasks (label) values
('task 0'),
('task 1'),
('task 2'),
('task 3');
