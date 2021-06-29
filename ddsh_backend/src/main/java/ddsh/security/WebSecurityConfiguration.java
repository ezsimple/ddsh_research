package ddsh.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
@EnableWebSecurity(debug = false)
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	// @EnableWebSecurity 추가하면 css, js 로딩 안되는 문제점 보완
	@Override
	public void configure(WebSecurity web) throws Exception {
		log.debug("{}", web.toString());
		web.ignoring()
			.antMatchers("/resources/**")
			.antMatchers("/static/**")
			.antMatchers("/webjars/**")
			.antMatchers("/images/**")
			.antMatchers("/css/**")
			.antMatchers("/js/**");
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.csrf().disable();
		
		// JWT만으로 사용할 경우에 사용
		// http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

		http.sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
			;

		// .maximumSessions(maximumSessions) // 
		// .expiredUrl("/logout.do")
        // .sessionRegistry(sessionRegistry);

		http.authorizeRequests()
			.antMatchers("/").permitAll()
			// .antMatchers("/**").permitAll() // 처음 UI디자인시 인증 무시
			.antMatchers("/login").permitAll()
			.antMatchers("/api/v1/abnormal").permitAll()  // RESTful API :: 이상행동 감지 허용

			.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
			.antMatchers("/error/403").permitAll()
			.antMatchers("/error/404").permitAll()
			.antMatchers("/error/500").permitAll()
			.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()

			.antMatchers("/admin/").hasAuthority("ROLE_ADMIN")
			
			// ===================================
 			// RESTful 방식 로그인이므로 사용안함		
			// ===================================
			// .and()
			//	.formLogin()
			//	.loginPage("/login")
			//	.defaultSuccessUrl("/")
			//	.permitAll()

			.and()
				.logout()
				.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
				.logoutSuccessUrl("/")
				.invalidateHttpSession(true)
				;

		http.logout()
			.logoutUrl("/logout")
			.logoutSuccessUrl("/");
		
		// http.exceptionHandling().accessDeniedPage("/login.do");

		// JWT Token 적용
		http.apply(new JwtTokenFilterConfiguration(jwtTokenProvider));

	}

	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
    	return new BCryptPasswordEncoder(12); // 12 remove
    }
    
//	@Autowired
//	private PasswordEncoder passwordEncoder; // 중요 : Circular Dependencies in Spring 발생

    @Bean
    public PasswordEncoder passwordEncoder(){
    	return bCryptPasswordEncoder();
    }

	@Autowired
    private UserDetailsService userDetailsService;
	
	@Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

}