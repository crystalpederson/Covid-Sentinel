CREATE TABLE public.users (
   	"_id" serial NOT NULL,
	"first_name" varchar NOT NULL,
    "last_name" varchar NOT NULL,
    "email" varchar NOT NULL UNIQUE,
    "password" varchar NOT NULL,
    PRIMARY KEY ("_id") 
);

CREATE TABLE public.favorites (
   	"_id" serial NOT NULL,
    "country_name" varchar NOT NULL,
    "user_id" bigint,
    PRIMARY KEY ("_id") 
);