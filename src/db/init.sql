CREATE TABLE todo (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    data VARCHAR(516) NOT NULL,
    done VARCHAR(1) NOT NULL);

INSERT INTO todo (title,data) VALUES 
('todo title','It is a long established fact that a reader will be distracted by the readable content
of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
more-or-less normal distribution of letters, as opposed to using "Content here, content"
here, making it look like readable English.');
