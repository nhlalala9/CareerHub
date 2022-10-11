

CREATE TABLE category(
    id serial not null primary key,
    name varchar(255),
    image varchar(255)
);

CREATE TABLE careercategory(
    id serial not null primary key,
    name varchar(255),
    image varchar(255)
);

CREATE TABLE careerpath(
    id serial not null primary key,
    name varchar(255),
    image varchar(255),
    isoutdoor boolean,
    careercategoryId int not null,
    foreign key(careercategoryId) references careercategory(id)
);

CREATE TABLE summary(
    id serial not null primary key,
    description varchar(255),
    image varchar(255),
    careerpathId int not null,
    foreign key(careerpathId) references careerpath(id)
);

CREATE TABLE salaryimage(
    id serial not null primary key,
    image text,
    careerpathId int not null,
    foreign key(careerpathId) references careerpath(id)
);

CREATE TABLE question(
    id serial not null primary key,
    question jsonb,
    image varchar(255),
    type int,
    categoryId int not null,
    careerpathId int not null,
    foreign key(categoryId) references category(id),
    foreign key (careerpathId) references category(id)
);

CREATE TABLE requirements(
    id serial not null primary key,
	requirements text,
	careerpathId int not null,
	foreign key(careerpathId) references careerpath(id)
 );
 
CREATE TABLE qualifications(
	 id serial not null primary key,
	 qualification varchar(255),
	 description text,
	 requirementsId int not null,
	 foreign key (requirementsId) references requirements(id)
 );