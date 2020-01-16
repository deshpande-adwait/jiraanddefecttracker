/**
 * 
 */
package org.tracker.backend.authentication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.tracker.backend.web.WebAPIEndPointConstants;

/**
 * @author sinadd
 * Class to control the authentication of Users.
 */
@RestController
@RequestMapping(WebAPIEndPointConstants.LOGIN)
public class UserController {

	@GetMapping
	public Boolean isAuthorized(@RequestParam("userId") String userId) {
		
		System.out.println("OKAY");
		if (userId.equals("sinadd") || userId.equals("deshpande_adwait")) {
			return true;
		}
		else {
			return false;
		}
	}
}
