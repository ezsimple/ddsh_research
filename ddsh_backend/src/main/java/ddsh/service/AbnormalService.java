package ddsh.service;

import org.springframework.stereotype.Service;

import io.mkeasy.resolver.CommandMap;
import io.mkeasy.webapp.processor.QueryFactory;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class AbnormalService {

	// 넙치 이상행동 리보트 저장 API
	public String insert(String farmNo, 
			String eqpmnNo, 
			String videoNo, 
			CommandMap commandMap) throws Exception {

		final String ns = "ddsh.abnormalMapper";
		final String nsId = "insertAbnlBhvdTb";
		
		commandMap.put("farmNo", farmNo);
		commandMap.put("eqpmnNo", eqpmnNo);
		commandMap.put("videoNo", videoNo);
		
		QueryFactory.executeTx(ns, nsId, commandMap.getQueryMap());
		
		return "{'result': 'ok'}";
	};
}
