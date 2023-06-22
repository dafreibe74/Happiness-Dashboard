create table 2021 (
	Rank VARCHAR(255) not null Primary Key,
	Country VARCHAR(255) NOT NULL,
	Happiness VARCHAR(255) not null,
 	Dystopia VARCHAR(255) NOT NULL,
  	GDP_per_capita VARCHAR(255) NOT NULL,
	Social_support VARCHAR(255) NOT NULL,
	Health VARCHAR(255) NOT NULL,
	Freedom VARCHAR(255) NOT NULL,
	Generosity VARCHAR(255) NOT NULL,
	Corruption VARCHAR(255) NOT NULL,
  	foreign key (Country) references 2021(Country)
);
	
drop table Rank;

create table 2022 (
	Rank VARCHAR(255) not null Primary Key,
	Country VARCHAR(255) NOT NULL,
	Happiness VARCHAR(255) not null,
 	Dystopia VARCHAR(255) NOT NULL,
  	GDP_per_capita VARCHAR(255) NOT NULL,
	Social_support VARCHAR(255) NOT NULL,
	Health VARCHAR(255) NOT NULL,
	Freedom VARCHAR(255) NOT NULL,
	Generosity VARCHAR(255) NOT NULL,
	Corruption VARCHAR(255) NOT NULL,
  	foreign key (Country) references 2021(Country)
);

select * from Scores;