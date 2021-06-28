package ddsh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.mkeasy.resolver.CommandMap;
import io.mkeasy.webapp.processor.QueryFactory;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class AbnormalService {

	@Autowired
	QueryFactory queryFactory;
	
	// 넙치 이상행동 리보트 저장 API
	public String insert(String farmNo, String eqpmnNo, String videoNo, CommandMap commandMap) {
		return "OK";
	};
}
