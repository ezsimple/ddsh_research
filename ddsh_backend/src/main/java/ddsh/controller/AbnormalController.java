package ddsh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import ddsh.service.AbnormalService;
import io.mkeasy.resolver.CommandMap;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/api/v1")
public class AbnormalController {
	
	@Autowired
	AbnormalService abnormalService;
	
	@ResponseBody
	@RequestMapping("/abnormal/{farmNo}/{eqpmnNo}/{videoNo}")
	public String save(@PathVariable("farmNo") String farmNo, 
			@PathVariable("eqpmnNo") String eqpmnNo, 
			@PathVariable("videoNo") String videoNo,
			CommandMap commandMap) throws Exception {

		log.debug("/abnormal/{}/{}/{}.{}",farmNo,eqpmnNo,videoNo,commandMap.getMap().toString());

		return abnormalService.insert(farmNo, eqpmnNo, videoNo, commandMap);
	}

}
