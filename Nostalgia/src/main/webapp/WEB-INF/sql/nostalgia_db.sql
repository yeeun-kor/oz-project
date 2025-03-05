
-- nos member
CREATE TABLE nos_member (
    id VARCHAR2(255) NOT NULL UNIQUE, -- 이메일 혹은 ID
    password VARCHAR2(255) NOT NULL, -- 비밀번호
    birth VARCHAR2(6), -- 생년월일
    name VARCHAR2(255) NOT NULL, -- 이름
    address VARCHAR2(255) NOT NULL, -- 주소
    phone VARCHAR2(20) NOT NULL, -- 연락처
    join_date DATE DEFAULT SYSDATE -- 회원 가입 날짜, 기본값으로 현재 날짜
);
SELECT COUNT(*) FROM nos_member WHERE id = 'jovm268@naver.com';
select * from nos_member;
commit;
desc nos_member;

 CREATE TABLE reservation
   (	"ID" NUMBER, 
	"NAME" VARCHAR2(100 BYTE), 
	"PHONE" VARCHAR2(20 BYTE), 
	"EMAIL" VARCHAR2(100 BYTE), 
	"CHECK_IN_DATE" DATE, 
	"CHECK_OUT_DATE" DATE, 
	"NUM_GUESTS" NUMBER, 
	"ROOM_TYPE" VARCHAR2(50 BYTE), 
	"REQUEST_NOTE" VARCHAR2(1000 BYTE), 
	"STAY_DURATION" NUMBER GENERATED ALWAYS AS ("CHECK_OUT_DATE"-"CHECK_IN_DATE") VIRTUAL , 
	 PRIMARY KEY ("ID"));
     
     select * from reservation;
     commit;
-- 시퀀스 생성
CREATE SEQUENCE reservation_seq
    START WITH 1         -- 초기값 (시퀀스 시작 번호)
    INCREMENT BY 1       -- 증가 값 (1씩 증가)
    NOCACHE;             -- 캐싱 비활성화 (즉시 반영)

-- 시퀀스가 존재하는지 확인하는 쿼리
SELECT * FROM all_sequences WHERE sequence_name = 'RESERVATION_SEQ';


-- 객실 예약하는 테이블 생성 room_type
CREATE TABLE room_type (
    room_id NUMBER(10) PRIMARY KEY,
    room_name VARCHAR2(255) NOT NULL,
    description CLOB,
    price NUMBER(10) NOT NULL,
    room_size VARCHAR2(50),  
    max_pax VARCHAR2(50),     
    bed_type VARCHAR2(255),
    image_url VARCHAR2(255)
);
SELECT * FROM NLS_DATABASE_PARAMETERS WHERE PARAMETER = 'NLS_CHARACTERSET';
SELECT image_url FROM room_type;

-- 시퀀스 생성 
CREATE SEQUENCE room_id_seq
START WITH 1  -- 1부터 시작
INCREMENT BY 1  -- 1씩 증가
NOCACHE  -- 캐싱 없이 실행
NOCYCLE;  -- 최대값 이후 다시 1로 초기화하지 않음
--트리거생성
CREATE OR REPLACE TRIGGER room_type_trg
BEFORE INSERT ON room_type
FOR EACH ROW
WHEN (NEW.room_id IS NULL)
BEGIN
    SELECT room_id_seq.NEXTVAL
    INTO :NEW.room_id
    FROM dual;
END;
/


UPDATE room_type
SET 
    room_name = '디럭스 룸',
    description = '편안하고 넓은 디럭스 룸',
    price = 150000,
    room_size = '45m²',
    max_pax = '4',
    bed_type = '퀸 침대'

WHERE room_id = 101;

        
-- insert실행 
INSERT INTO room_type (room_name, description, price, room_size, max_pax, bed_type, image_url)
VALUES ('Deluxe Room', 'A spacious room with sea view', 150000, '30㎡', '2', 'King Bed', 'deluxe.jpg');

INSERT INTO room_type (room_name, description, price, room_size, max_pax, bed_type, image_url)
VALUES ('Standard Room', 'A cozy room with garden view', 100000, '25㎡', '2', 'Queen Bed', 'standard.jpg');

-- Update실행
UPDATE room_type
SET image_url = 'rev02.jpg'
WHERE room_name = 'Standard Room';


--확인 
commit;
select * from room_type;
SELECT room_name, image_url FROM room_type;
drop table room_type;
drop SEQUENCE room_id_seq;
drop TRIGGER room_type_trg;

