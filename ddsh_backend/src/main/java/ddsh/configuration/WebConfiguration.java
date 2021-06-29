package ddsh.configuration;

import java.io.IOException;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.PathResourceResolver;

import ddsh.security.LoginInterceptor;
import io.mkeasy.resolver.CommandMapArgumentResolver;
import lombok.extern.slf4j.Slf4j;

@Slf4j
// @EnableWebMvc // 사용금지
@Configuration
@SuppressWarnings("deprecation")
public class WebConfiguration extends WebMvcConfigurerAdapter {
	
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        argumentResolvers.add(new CommandMapArgumentResolver());
    }

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {

		registry
			.addResourceHandler("/static/**")
			.addResourceLocations("/static/","classpath:/static/","classpath:/static/static/");

		registry.addResourceHandler("/**")
			.addResourceLocations("classpath:/static/index.html")
			.setCachePeriod(3600).resourceChain(true)
			.addResolver(new PathResourceResolver() {
				@Override
				protected Resource getResource(String resourcePath,
						Resource location) throws IOException {
					Resource loc = location.exists() && location.isReadable() ? location :null;
					return loc;
				}
			});
		
	}
	
	@Bean
	LoginInterceptor loginInterceptor() {
		return new LoginInterceptor();
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(loginInterceptor())
		.addPathPatterns("/**")
		.excludePathPatterns("/","/manifest.json","/favicon.ico","/static/**","/webjars/**","/login","/logout","/index*","/error**","/error/**")
		.excludePathPatterns("/api/v1/abnormal/**"); // AI학습 서버 연동 
	}

}
