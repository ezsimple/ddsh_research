package ddsh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class HelloController {
	
	@RequestMapping(value={"/"})
	public String index() {
		return "index"; // static/index.html
	}

}
