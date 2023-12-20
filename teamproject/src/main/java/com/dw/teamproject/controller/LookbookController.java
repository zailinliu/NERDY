package com.dw.teamproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.dw.teamproject.model.Lookbook;
import com.dw.teamproject.service.FunctionService;

@RestController
@RequestMapping("/lookbook")
@CrossOrigin(origins="http://localhost:3000", methods = {RequestMethod.GET,RequestMethod.POST})
public class LookbookController {

	private FunctionService functionService;
	
	@Autowired
	public LookbookController(FunctionService functionService) {
		super();
		this.functionService = functionService;
	}
	
	@PostMapping
//	사이트 생성
	public ResponseEntity<Lookbook> saveLookbook(
			@RequestBody Lookbook lookbook){
		return new ResponseEntity<Lookbook>(
				functionService.saveLookbook(lookbook),
				HttpStatus.CREATED
				);
	}
	

	@GetMapping
	public ResponseEntity<List<Lookbook>> getAllLookbooks(){
		List<Lookbook> lookbook = functionService.getAllLookbooks();
		return new ResponseEntity<>(lookbook,HttpStatus.OK);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Lookbook> getlookbookById(
			@PathVariable("id") long id){
//			주소 뒤에 붙힐 id 값을 무슨 형식으로 넣을지 정하는 부분
	return new ResponseEntity<Lookbook>(
			functionService.getLookbookById(id),HttpStatus.OK);
	}
	
	@PutMapping("{id}")
//	정보를 입력할때 사용하는 풋매핑
	public ResponseEntity<Lookbook> updatelookbookById(
			@RequestBody Lookbook lookbook, @PathVariable long id)
//			비동기방식(화면전환 없이 이루어지는 동작)을 사용하기 위해 먼저 요청 그후 응답 형식으로 이루어짐
			{
		return new ResponseEntity<Lookbook>(
				functionService.updateLookbookById(lookbook, id),
				HttpStatus.OK);
	}
}
