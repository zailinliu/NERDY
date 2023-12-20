package com.dw.teamproject.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.dw.teamproject.model.Acc;
import com.dw.teamproject.model.Purchase;
import com.dw.teamproject.service.FunctionService;

@RestController
@RequestMapping("/acc")
@CrossOrigin(origins="http://localhost:3000", methods = {RequestMethod.GET,RequestMethod.POST})
public class AccController {

private FunctionService functionService;
	
	@Autowired
	public AccController(FunctionService functionService) {
		super();
		this.functionService = functionService;
	}
	
	@PostMapping
//	사이트 생성
	public ResponseEntity<Acc> saveAcc(
			@RequestBody Acc acc){
		return new ResponseEntity<Acc>(
				functionService.saveAcc(acc),
				HttpStatus.CREATED
				);
	}
	
	@GetMapping
//	요청을 입력받을때 사용하는 겟메핑
	public ResponseEntity<List<Acc>> getAllAccs(){
//		http 요청 또는 응답에 해당하는 컴포넌트를 포함한 리스폰스엔티티를 사용 배열안에 게임을 넣어 순차적으로 보이게 하기 위함
		List<Acc> acc = functionService.getAllAccs();
		return new ResponseEntity<>(acc,HttpStatus.OK);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Acc> getAccById(
			@PathVariable("id") long id){
//			주소 뒤에 붙힐 id 값을 무슨 형식으로 넣을지 정하는 부분
	return new ResponseEntity<Acc>(
			functionService.getAccById(id),HttpStatus.OK);
	}
	
	@PutMapping("{id}")
//	정보를 입력할때 사용하는 풋매핑
	public ResponseEntity<Acc> updateAccById(
			@RequestBody Acc acc, @PathVariable long id)
//			비동기방식(화면전환 없이 이루어지는 동작)을 사용하기 위해 먼저 요청 그후 응답 형식으로 이루어짐
			{
		return new ResponseEntity<Acc>(
				functionService.updateAccById(acc, id),
				HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
//	게임 삭제
	public ResponseEntity<String> deleteAccById(@PathVariable long id){
		functionService.deleteAcc(id);
		return new ResponseEntity<String>("Acc deletd successfully",HttpStatus.OK);
	}

	@PostMapping("purchase")
	public ResponseEntity<Purchase> savePurchase(@RequestBody Purchase purchase){
		return new ResponseEntity<Purchase>(
				functionService.savePurchase(purchase),HttpStatus.OK);
	}
	
	@PostMapping("purchaselist")
	public ResponseEntity<List<Purchase>> savePurchaseList(
			@RequestBody List<Purchase> purchaseList){
		System.out.println("request");
		List<Purchase> savedPurchaseList = new ArrayList<Purchase>();
		for(Purchase purchase : purchaseList) {
			savedPurchaseList.add(functionService.savePurchase(purchase));
		}
		return new ResponseEntity<List<Purchase>>(savedPurchaseList, HttpStatus.OK);
	}
}
