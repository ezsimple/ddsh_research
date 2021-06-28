-- -----------------------------------------------------
-- Schema halibutDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `halibutDB` DEFAULT CHARACTER SET utf8 ;
USE `halibutDB` ;

-- -----------------------------------------------------
-- Table `halibutDB`.`CODE_INFO_TB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `halibutDB`.`CODE_INFO_TB` (
  `UP_CODE_ID` VARCHAR(7) NULL COMMENT '상위코드ID' COLLATE 'utf8_general_ci',
  `G_CODE_ID` VARCHAR(4) NOT NULL COMMENT '그룹코드ID' COLLATE 'utf8_general_ci',
  `CODE_ID` VARCHAR(7) NOT NULL COMMENT '코드ID' COLLATE 'utf8_general_ci',
  `CODE_NM` VARCHAR(50) NOT NULL COMMENT '코드명' COLLATE 'utf8_general_ci',
  `CODE_VALUE` VARCHAR(50) NULL COMMENT '코드값' COLLATE 'utf8_general_ci',
  `USE_YN` CHAR(1) NOT NULL DEFAULT 'Y' COMMENT '사용여부' COLLATE 'utf8_general_ci',
  `RMKS` VARCHAR(255) NULL COMMENT '비고' COLLATE 'utf8_general_ci',
  PRIMARY KEY (`CODE_ID`))
COMMENT='코드정보'
COLLATE='utf8_general_ci'
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `halibutDB`.`FISH_FARM_TB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `halibutDB`.`FISH_FARM_TB` (
  `FARM_NO` CHAR(5) NOT NULL COMMENT '양식장번호' COLLATE 'utf8_general_ci',
  `FARM_NM` VARCHAR(50) NULL COMMENT '양식장명' COLLATE 'utf8_general_ci',
  `OWNER_NM` VARCHAR(20) NULL COMMENT '소유자명' COLLATE 'utf8_general_ci',
  `ADRES` VARCHAR(100) NULL COMMENT '주소' COLLATE 'utf8_general_ci',
  `ADRES_DETAIL` VARCHAR(100) NULL COMMENT '주소상세' COLLATE 'utf8_general_ci',
  `TEL_NMBR` VARCHAR(11) NULL COMMENT '전화번호' COLLATE 'utf8_general_ci',
  `REGIST_ID` VARCHAR(20) NULL COMMENT '등록자 아이디' COLLATE 'utf8_general_ci',
  `REGIST_DT` DATETIME NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일자',
  `UPDT_ID` VARCHAR(20) NULL COMMENT '수정자 아이디' COLLATE 'utf8_general_ci',
  `UPDT_DT` DATETIME NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일자',
  `USE_YN` CHAR(1) NOT NULL DEFAULT 'Y' COMMENT '사용여부' COLLATE 'utf8_general_ci',
  `RMKS` VARCHAR(255) NULL COMMENT '비고' COLLATE 'utf8_general_ci',
  PRIMARY KEY (`FARM_NO`))
COMMENT='농장정보'
COLLATE='utf8_general_ci'
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `halibutDB`.`USER_INFO_TB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `halibutDB`.`USER_INFO_TB` (
  `SN` INT UNSIGNED NOT NULL COMMENT '순번',
  `FARM_NO` CHAR(5) NOT NULL COMMENT '양식장번호' COLLATE 'utf8_general_ci',
  `USER_ID` VARCHAR(30) NOT NULL COMMENT '아이디' COLLATE 'utf8_general_ci',
  `AUTHOR_CD` VARCHAR(7) NOT NULL COMMENT '권한코드' COLLATE 'utf8_general_ci',
  `USER_PW` VARCHAR(30) NOT NULL COMMENT '패스워드' COLLATE 'utf8_general_ci',
  `USER_NM` VARCHAR(20) NULL COMMENT '이름' COLLATE 'utf8_general_ci',
  `TEL_NMBR` VARCHAR(11) NULL COMMENT '전화번호' COLLATE 'utf8_general_ci',
  `PHONE_NMBR` VARCHAR(11) NULL COMMENT '휴대폰번호' COLLATE 'utf8_general_ci',
  `ADRES` VARCHAR(100) NULL COMMENT '양식장주소' COLLATE 'utf8_general_ci',
  `ADRES_DETAIL` VARCHAR(100) NULL COMMENT '양식장상세주소' COLLATE 'utf8_general_ci',
  `REGIST_ID` VARCHAR(20) NULL COMMENT '등록자 아이디' COLLATE 'utf8_general_ci',
  `REGIST_DT` DATETIME NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일자',
  `UPDT_ID` VARCHAR(20) NULL COMMENT '수정자 아이디' COLLATE 'utf8_general_ci',
  `UPDT_DT` DATETIME NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일자',
  `USE_YN` CHAR(1) NOT NULL DEFAULT 'Y' COMMENT '사용여부' COLLATE 'utf8_general_ci',
  `RMKS` VARCHAR(255) NULL COMMENT '비고' COLLATE 'utf8_general_ci',
  PRIMARY KEY (`USER_ID`),
  -- UNIQUE INDEX `SN_UNIQUE` (`SN` ASC) VISIBLE,
  -- INDEX `fk_USER_INFO_TB_FISH_FARM_TB1_idx` (`FARM_NO` ASC) VISIBLE,
  CONSTRAINT `fk_USER_INFO_TB_FISH_FARM_TB1`
    FOREIGN KEY (`FARM_NO`)
    REFERENCES `halibutDB`.`FISH_FARM_TB` (`FARM_NO`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
COMMENT='사용자정보'
COLLATE='utf8_general_ci'
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `halibutDB`.`ALERT_LOG_TB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `halibutDB`.`ALERT_LOG_TB` (
  `FARM_NO` CHAR(5) NOT NULL COLLATE 'utf8_general_ci',
  `EVENT_CD` VARCHAR(7) NOT NULL COMMENT '이벤트코드' COLLATE 'utf8_general_ci',
  `EVENT_OCCR_DT` DATETIME NULL COMMENT '이벤트발생일시',
  `SMS_SEND_DT` DATETIME NULL COMMENT '카카오알림톡발송일시',
  `SMS_MSG` VARCHAR(255) NOT NULL COMMENT '발송메시지' COLLATE 'utf8_general_ci',
  `RCV_USER_ID` VARCHAR(20) NULL COLLATE 'utf8_general_ci',
  `RCV_PHONE_NMBR` VARCHAR(11) NOT NULL COLLATE 'utf8_general_ci',
  `EVENT_MSG` VARCHAR(255) NOT NULL COLLATE 'utf8_general_ci',
  `USE_YN` CHAR(1) NOT NULL DEFAULT 'Y' COMMENT '사용여부' COLLATE 'utf8_general_ci',
  `RMKS` VARCHAR(255) NULL COMMENT '비고' COLLATE 'utf8_general_ci',
  PRIMARY KEY (`EVENT_CD`, `FARM_NO`),
  -- INDEX `fk_ALERT_LOG_TB_FISH_FARM_TB1_idx` (`FARM_NO` ASC) VISIBLE,
  CONSTRAINT `fk_ALERT_LOG_TB_FISH_FARM_TB1`
    FOREIGN KEY (`FARM_NO`)
    REFERENCES `halibutDB`.`FISH_FARM_TB` (`FARM_NO`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
COMMENT='알람로그정보'
COLLATE='utf8_general_ci'
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `halibutDB`.`ALERT_STNG_TB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `halibutDB`.`ALERT_STNG_TB` (
  `FARM_NO` CHAR(5) NOT NULL COLLATE 'utf8_general_ci',
  `USER_ID` VARCHAR(30) NOT NULL COLLATE 'utf8_general_ci',
  `EVENT_CD` VARCHAR(7) NOT NULL COMMENT '이벤트코드' COLLATE 'utf8_general_ci',
  `ALM_CLR_NM` VARCHAR(50) NULL COMMENT '알람해지이름' COLLATE 'utf8_general_ci',
  `ALM_CLR_START_DT` DATETIME NULL COMMENT '알람해지시작시간',
  `ALM_CLR_END_DT` DATETIME NULL COMMENT '알람해지종료시간',
  `REGIST_ID` VARCHAR(20) NULL COMMENT '등록자 아이디' COLLATE 'utf8_general_ci',
  `REGIST_DT` DATETIME NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일자',
  `UPDT_ID` VARCHAR(20) NULL COMMENT '수정자 아이디' COLLATE 'utf8_general_ci',
  `UPDT_DT` DATETIME NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일자',
  `USE_YN` CHAR(1) NOT NULL DEFAULT 'Y' COMMENT '사용여부' COLLATE 'utf8_general_ci',
  `RMKS` VARCHAR(255) NULL COMMENT '비고' COLLATE 'utf8_general_ci',
  PRIMARY KEY (`EVENT_CD`, `FARM_NO`, `USER_ID`),
  -- INDEX `fk_ALERT_STNG_TB_FISH_FARM_TB1_idx` (`FARM_NO` ASC) VISIBLE,
  -- INDEX `fk_ALERT_STNG_TB_USER_INFO_TB1_idx` (`USER_ID` ASC) VISIBLE,
  CONSTRAINT `fk_ALERT_STNG_TB_FISH_FARM_TB1`
    FOREIGN KEY (`FARM_NO`)
    REFERENCES `halibutDB`.`FISH_FARM_TB` (`FARM_NO`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_ALERT_STNG_TB_USER_INFO_TB1`
    FOREIGN KEY (`USER_ID`)
    REFERENCES `halibutDB`.`USER_INFO_TB` (`USER_ID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
COMMENT='알람설정정보'
COLLATE='utf8_general_ci'
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `halibutDB`.`THRSH_STNG_TB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `halibutDB`.`THRSH_STNG_TB` (
  `SN` INT UNSIGNED NOT NULL COMMENT '순번',
  `FARM_NO` CHAR(5) NOT NULL COLLATE 'utf8_general_ci',
  `EVENT_CD` VARCHAR(7) NOT NULL COMMENT '이벤트코드' COLLATE 'utf8_general_ci',
  `LOW_THRSH` DOUBLE(5,2) NULL COMMENT '하한임계치',
  `UP_THRSH` DOUBLE(5,2) NULL COMMENT '상한임계치',
  `REGIST_ID` VARCHAR(20) NULL COMMENT '등록자 아이디' COLLATE 'utf8_general_ci',
  `REGIST_DT` DATETIME NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일자',
  `UPDT_ID` VARCHAR(20) NULL COMMENT '수정자 아이디' COLLATE 'utf8_general_ci',
  `UPDT_DT` DATETIME NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일자',
  `USE_YN` CHAR(1) NOT NULL DEFAULT 'Y' COMMENT '사용여부' COLLATE 'utf8_general_ci',
  `RMKS` VARCHAR(255) NULL COMMENT '비고' COLLATE 'utf8_general_ci',
  PRIMARY KEY (`SN`, `EVENT_CD`, `FARM_NO`),
  -- INDEX `fk_THRSH_STNG_TB_FISH_FARM_TB1_idx` (`FARM_NO` ASC) VISIBLE,
  CONSTRAINT `fk_THRSH_STNG_TB_FISH_FARM_TB1`
    FOREIGN KEY (`FARM_NO`)
    REFERENCES `halibutDB`.`FISH_FARM_TB` (`FARM_NO`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
COMMENT='임계값설정정보'
COLLATE='utf8_general_ci'
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `halibutDB`.`EQPMN_MNG_TB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `halibutDB`.`EQPMN_MNG_TB` (
  `FARM_NO` CHAR(5) NOT NULL COLLATE 'utf8_general_ci',
  `EQPMN_NO` VARCHAR(10) NOT NULL COMMENT '장비번호' COLLATE 'utf8_general_ci',
  `EQPMN_CD` VARCHAR(7) NOT NULL COMMENT '장비구분코드' COLLATE 'utf8_general_ci',
  `EQPMN_NM` VARCHAR(20) NULL COMMENT '장비명' COLLATE 'utf8_general_ci',
  `REGIST_ID` VARCHAR(20) NULL COMMENT '등록자 아이디' COLLATE 'utf8_general_ci',
  `REGIST_DT` DATETIME NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일자',
  `UPDT_ID` VARCHAR(20) NULL COMMENT '수정자 아이디' COLLATE 'utf8_general_ci',
  `UPDT_DT` DATETIME NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일자',
  `USE_YN` CHAR(1) NOT NULL DEFAULT 'Y' COMMENT '사용여부' COLLATE 'utf8_general_ci',
  `RMKS` VARCHAR(255) NULL COMMENT '비고' COLLATE 'utf8_general_ci',
  PRIMARY KEY (`EQPMN_NO`, `EQPMN_CD`, `FARM_NO`),
  -- INDEX `fk_EQPMN_MNG_TB_FISH_FARM_TB1_idx` (`FARM_NO` ASC) VISIBLE,
  CONSTRAINT `fk_EQPMN_MNG_TB_FISH_FARM_TB1`
    FOREIGN KEY (`FARM_NO`)
    REFERENCES `halibutDB`.`FISH_FARM_TB` (`FARM_NO`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
COMMENT='장비정보'
COLLATE='utf8_general_ci'
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `halibutDB`.`MESURE_INFO_TB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `halibutDB`.`MESURE_INFO_TB` (
  `FARM_NO` CHAR(5) NOT NULL COLLATE 'utf8_general_ci',
  `EQPMN_NO` VARCHAR(10) NOT NULL COLLATE 'utf8_general_ci',
  `WATER_TEMP` DOUBLE(5,2) NULL,
  `DSOXY_CNCNT` DOUBLE(5,2) NULL,
  `PH_CNCNT` DOUBLE(5,2) NULL,
  `MESURE_DT` DATETIME NOT NULL,
  `LOG_DT` DATETIME NOT NULL,
  `USE_YN` CHAR(1) NOT NULL DEFAULT 'Y' COMMENT '사용여부' COLLATE 'utf8_general_ci',
  `RMKS` VARCHAR(255) NULL COMMENT '비고' COLLATE 'utf8_general_ci',
  -- INDEX `fk_MESURE_INFO_TB_FISH_FARM_TB1_idx` (`FARM_NO` ASC) VISIBLE,
  -- INDEX `fk_MESURE_INFO_TB_EQPMN_MNG_TB1_idx` (`EQPMN_NO` ASC) VISIBLE,
  PRIMARY KEY (`FARM_NO`, `EQPMN_NO`),
  CONSTRAINT `fk_MESURE_INFO_TB_FISH_FARM_TB1`
    FOREIGN KEY (`FARM_NO`)
    REFERENCES `halibutDB`.`FISH_FARM_TB` (`FARM_NO`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_MESURE_INFO_TB_EQPMN_MNG_TB1`
    FOREIGN KEY (`EQPMN_NO`)
    REFERENCES `halibutDB`.`EQPMN_MNG_TB` (`EQPMN_NO`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
COMMENT='수질측정센서정보'
COLLATE='utf8_general_ci'
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `halibutDB`.`CCTV_INFO_TB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `halibutDB`.`CCTV_INFO_TB` (
  `FARM_NO` CHAR(5) NOT NULL COLLATE 'utf8_general_ci',
  `EQPMN_NO` VARCHAR(10) NOT NULL COLLATE 'utf8_general_ci',
  `DDNS_URL` VARCHAR(255) NULL COMMENT 'DDNS URL' COLLATE 'utf8_general_ci',
  `CCTV_PORT` INT UNSIGNED NULL COMMENT 'CCTV PORT 번호',
  `CCTV_RTSP` VARCHAR(200) NULL COMMENT 'CCTV RTSP' COLLATE 'utf8_general_ci',
  `CCTV_ID` VARCHAR(20) NULL COMMENT 'CCTV_아이디' COLLATE 'utf8_general_ci',
  `CCTV_PW` VARCHAR(20) NULL COMMENT 'CCTV 패스워드' COLLATE 'utf8_general_ci',
  `REGIST_ID` VARCHAR(20) NULL COMMENT '등록자 아이디' COLLATE 'utf8_general_ci',
  `REGIST_DT` DATETIME NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일자',
  `UPDT_ID` VARCHAR(20) NULL COMMENT '수정자 아이디' COLLATE 'utf8_general_ci',
  `UPDT_DT` DATETIME NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일자',
  `USE_YN` CHAR(1) NOT NULL DEFAULT 'Y' COMMENT '사용여부' COLLATE 'utf8_general_ci',
  `RMKS` VARCHAR(255) NULL COMMENT '비고' COLLATE 'utf8_general_ci',
  -- INDEX `fk_CCTV_INFO_TB_FISH_FARM_TB1_idx` (`FARM_NO` ASC) VISIBLE,
  -- INDEX `fk_CCTV_INFO_TB_EQPMN_MNG_TB1_idx` (`EQPMN_NO` ASC) VISIBLE,
  PRIMARY KEY (`FARM_NO`, `EQPMN_NO`),
  CONSTRAINT `fk_CCTV_INFO_TB_FISH_FARM_TB1`
    FOREIGN KEY (`FARM_NO`)
    REFERENCES `halibutDB`.`FISH_FARM_TB` (`FARM_NO`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_CCTV_INFO_TB_EQPMN_MNG_TB1`
    FOREIGN KEY (`EQPMN_NO`)
    REFERENCES `halibutDB`.`EQPMN_MNG_TB` (`EQPMN_NO`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
COMMENT='CCTV정보'
COLLATE='utf8_general_ci'
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `halibutDB`.`DETECT_INFO_TB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `halibutDB`.`DETECT_INFO_TB` (
  `FARM_NO` CHAR(5) NOT NULL COLLATE 'utf8_general_ci',
  `EQPMN_NO` VARCHAR(10) NOT NULL COLLATE 'utf8_general_ci',
  `DETECT_DT` DATETIME NOT NULL COMMENT '탐지일시',
  `ACTIVITY_CD` VARCHAR(7) NOT NULL COMMENT '행동코드' COLLATE 'utf8_general_ci',
  `ACTIVITY_CNT` DOUBLE(5,2) NOT NULL COMMENT '행동탐지수치',
  `USE_YN` CHAR(1) NOT NULL DEFAULT 'Y' COMMENT '사용여부' COLLATE 'utf8_general_ci',
  `RMKS` VARCHAR(255) NULL COMMENT '비고' COLLATE 'utf8_general_ci',
  PRIMARY KEY (`DETECT_DT`, `FARM_NO`, `EQPMN_NO`),
  -- INDEX `fk_DETECT_INFO_TB_FISH_FARM_TB1_idx` (`FARM_NO` ASC) VISIBLE,
  -- INDEX `fk_DETECT_INFO_TB_EQPMN_MNG_TB1_idx` (`EQPMN_NO` ASC) VISIBLE,
  CONSTRAINT `fk_DETECT_INFO_TB_FISH_FARM_TB1`
    FOREIGN KEY (`FARM_NO`)
    REFERENCES `halibutDB`.`FISH_FARM_TB` (`FARM_NO`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_DETECT_INFO_TB_EQPMN_MNG_TB1`
    FOREIGN KEY (`EQPMN_NO`)
    REFERENCES `halibutDB`.`EQPMN_MNG_TB` (`EQPMN_NO`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
COMMENT='행동이력정보'
COLLATE='utf8_general_ci'
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `halibutDB`.`ABNL_BHVD_TB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `halibutDB`.`ABNL_BHVD_TB` (
  `FARM_NO` CHAR(5) NOT NULL COMMENT '양식장번호' COLLATE 'utf8_general_ci',
  `EQPMN_NO` VARCHAR(10) NOT NULL COMMENT '장비번호' COLLATE 'utf8_general_ci',
  `VIDEO_NO` VARCHAR(50) NOT NULL COMMENT '영상번호: 장비번호_이상행동탐지시간_행동코드' COLLATE 'utf8_general_ci',
  `DETECT_DT` DATETIME NOT NULL COMMENT '이상행동 탐지 시간',
  `VIDEO_LENG` INT UNSIGNED NULL COMMENT '영상길이 : 초단위 비디오 영상 길이',
  `VIDEO_URI` VARCHAR(255) NULL COMMENT '영상경로 (저장된 상태경로)' COLLATE 'utf8_general_ci',
  `ACTIVITY_CD` VARCHAR(7) NOT NULL COMMENT '행동코드' COLLATE 'utf8_general_ci',
  `ACTIVITY_CNT` DOUBLE(5,2) NOT NULL COMMENT '탐지 수치',
  `USE_YN` CHAR(1) NOT NULL DEFAULT 'Y' COMMENT '사용여부' COLLATE 'utf8_general_ci',
  `RMKS` VARCHAR(255) NULL COMMENT '비고' COLLATE 'utf8_general_ci',
  PRIMARY KEY (`VIDEO_NO`),
  -- INDEX `fk_ABNL_BHVD_TB_FISH_FARM_TB1_idx` (`FARM_NO` ASC) VISIBLE,
  -- INDEX `fk_ABNL_BHVD_TB_EQPMN_MNG_TB1_idx` (`EQPMN_NO` ASC) VISIBLE,
  CONSTRAINT `fk_ABNL_BHVD_TB_FISH_FARM_TB1`
    FOREIGN KEY (`FARM_NO`)
    REFERENCES `halibutDB`.`FISH_FARM_TB` (`FARM_NO`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_ABNL_BHVD_TB_EQPMN_MNG_TB1`
    FOREIGN KEY (`EQPMN_NO`)
    REFERENCES `halibutDB`.`EQPMN_MNG_TB` (`EQPMN_NO`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
COMMENT='이상행동탐지정보'
COLLATE='utf8_general_ci'
ENGINE = InnoDB;

COMMIT;
