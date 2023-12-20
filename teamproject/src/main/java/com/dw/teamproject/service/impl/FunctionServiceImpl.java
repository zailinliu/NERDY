package com.dw.teamproject.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dw.teamproject.model.Acc;
import com.dw.teamproject.model.BestItem;
import com.dw.teamproject.model.Lookbook;
import com.dw.teamproject.model.MBSlide;
import com.dw.teamproject.model.NewItem;
import com.dw.teamproject.model.Purchase;
import com.dw.teamproject.model.Shoes;
import com.dw.teamproject.model.The8;
import com.dw.teamproject.repository.AccRepository;
import com.dw.teamproject.repository.BestItemRepository;
import com.dw.teamproject.repository.LookbookRepository;
import com.dw.teamproject.repository.MBSlideRepository;
import com.dw.teamproject.repository.NewItemRepository;
import com.dw.teamproject.repository.PurchaseRepository;
import com.dw.teamproject.repository.ShoesRepository;
import com.dw.teamproject.repository.The8Repository;
import com.dw.teamproject.service.FunctionService;

@Service
public class FunctionServiceImpl implements FunctionService {
	
	private NewItemRepository newitemRepository;
	private PurchaseRepository purchaseRepository;
	private BestItemRepository bestitemRepository;
	private LookbookRepository lookbookRepository;
	private ShoesRepository shoesRepository;
	private AccRepository accRepository;
	private The8Repository the8Repository;
	private MBSlideRepository mbslideRepository;

//	리포지토리에 연결

	@Autowired
//	의존성 주입
	public FunctionServiceImpl(NewItemRepository newitemRepository, PurchaseRepository purchaseRepository,
			BestItemRepository bestitemRepository, LookbookRepository lookbookRepository,
			ShoesRepository shoesRepository, AccRepository accRepository,
			The8Repository the8Repository, MBSlideRepository mbslideRepository) {
		super();
		this.newitemRepository = newitemRepository;
		this.purchaseRepository = purchaseRepository;
		this.bestitemRepository = bestitemRepository;
		this.lookbookRepository = lookbookRepository;
		this.shoesRepository = shoesRepository;
		this.accRepository = accRepository;
		this.the8Repository = the8Repository;
		this.mbslideRepository = mbslideRepository;
	}

//	저장부분
	
	@Override
	public NewItem saveNewItem(NewItem newitem) {
		return newitemRepository.save(newitem);
	}
	
	@Override
	public BestItem saveBestItem(BestItem bestitem) {
		return bestitemRepository.save(bestitem);
	}
	
	@Override
	public Lookbook saveLookbook(Lookbook lookbook) {
		return lookbookRepository.save(lookbook);
	}
	
	@Override
	public Shoes saveShoes(Shoes shoes) {
		return shoesRepository.save(shoes);
	}
	
	@Override
	public Acc saveAcc(Acc acc) {
		return accRepository.save(acc);
	}
	
	@Override
	public The8 saveThe8(The8 the8) {
		return the8Repository.save(the8);
	}
	
	@Override
	public MBSlide saveMBSlide(MBSlide mbSlide) {
		return mbslideRepository.save(mbSlide);
	}
// 리스트 가져오는 부분
	@Override
	public List<NewItem> getAllNewItems(){
		return newitemRepository.findAll();
	}
	
	@Override
	public List<BestItem> getAllBestItems(){
		return bestitemRepository.findAll();
	}
	
	@Override
	public List<Lookbook> getAllLookbooks(){
		return lookbookRepository.findAll();
	}
	
	@Override
	public List<Shoes> getAllShoes(){
		return shoesRepository.findAll();
	}
	
	@Override
	public List<Acc> getAllAccs(){
		return accRepository.findAll();	
	}
	
	@Override
	public List<The8> getAllThe8s(){
		return the8Repository.findAll();
	}
	
	@Override
	public List<MBSlide> getAllMBSlides(){
		return mbslideRepository.findAll();
	}
//	개별 가져오는 부분
	@Override
	public NewItem getNewItemById(long id) {
		return newitemRepository.findById(id).orElseThrow(()->
		null);
	}
	
	@Override
	public BestItem getBestItemById(long id) {
		return bestitemRepository.findById(id).orElseThrow(()->null);
	}
	
	@Override
	public Lookbook getLookbookById(long id) {
		return lookbookRepository.findById(id).orElseThrow(()->null);
	}
	
	@Override
	public Shoes getShoesById(long id) {
		return shoesRepository.findById(id).orElseThrow(()->null);
	}
	
	@Override
	public Acc getAccById(long id) {
		return accRepository.findById(id).orElseThrow(()->null);
	}
	
	@Override
	public The8 getThe8ById(long id) {
		return the8Repository.findById(id).orElseThrow(()->null);
	}
	
	@Override
	public MBSlide getMBSlideById(long id) {
		return mbslideRepository.findById(id).orElseThrow(()->null);
	}
	
//	업데이트 부분
	
	@Override
	public NewItem updateNewItemById(NewItem newitem,long id) {
		NewItem existingnewitem = newitemRepository.findById(id)
				.orElseThrow(()-> null);
		existingnewitem.setMainimg(newitem.getMainimg());
		existingnewitem.setName(newitem.getName());
		existingnewitem.setSale(newitem.getSale());
		existingnewitem.setPrice(newitem.getPrice());
		
		newitemRepository.save(existingnewitem);
		return existingnewitem;
	}
	
	@Override
	public BestItem updateBestItemById(BestItem bestitem, long id) {
		BestItem existinbestitem = bestitemRepository.findById(id)
				.orElseThrow(()-> null);
		existinbestitem.setMainimg(bestitem.getMainimg());
		existinbestitem.setName(bestitem.getName());
		existinbestitem.setSale(bestitem.getSale());
		existinbestitem.setPrice(bestitem.getPrice());
		
		bestitemRepository.save(existinbestitem);
		return existinbestitem;
	}
	
	@Override
	public Lookbook updateLookbookById(Lookbook lookbook, long id) {
		Lookbook existinbLookbook = lookbookRepository.findById(id)
				.orElseThrow(() -> null);
		existinbLookbook.setImg(lookbook.getImg());
		existinbLookbook.setTitle(lookbook.getTitle());
		existinbLookbook.setDate(lookbook.getDate());
		
		lookbookRepository.save(existinbLookbook);
		return existinbLookbook;
	}
	
	@Override
	public Shoes updateShoesById(Shoes shoes, long id) {
		Shoes exisintShoes = shoesRepository.findById(id)
				.orElseThrow(()->null);
		exisintShoes.setMainimg(shoes.getMainimg());
		exisintShoes.setName(shoes.getName());
		exisintShoes.setSale(shoes.getSale());
		exisintShoes.setPrice(shoes.getPrice());
		
		shoesRepository.save(exisintShoes);
		return exisintShoes;
	}
	
	@Override
	public Acc updateAccById(Acc acc, long id) {
		Acc exisintAcc = accRepository.findById(id).orElseThrow(()->null);
		exisintAcc.setMainimg(acc.getMainimg());
		exisintAcc.setName(acc.getName());
		exisintAcc.setSale(acc.getSale());
		exisintAcc.setPrice(acc.getPrice());
		
		accRepository.save(exisintAcc);
		return exisintAcc;
	}

	@Override
	public The8 updateThe8ById(The8 the8, long id) {
		The8 exisintThe8 = the8Repository.findById(id).orElseThrow(()->null);
		exisintThe8.setMainimg(the8.getMainimg());
		exisintThe8.setName(the8.getName());
		exisintThe8.setSale(the8.getSale());
		exisintThe8.setPrice(the8.getPrice());
		
		the8Repository.save(exisintThe8);
		return exisintThe8;
	}
	
	@Override
	public MBSlide updateMBSlideById(MBSlide mbslide, long id) {
		MBSlide exisintMBSlide = mbslideRepository.findById(id).orElseThrow(()->null);
		exisintMBSlide.setUrl(mbslide.getUrl());
		exisintMBSlide.setText1(mbslide.getText1());
		exisintMBSlide.setText2(mbslide.getText2());
		exisintMBSlide.setText3(mbslide.getText3());
		
		mbslideRepository.save(exisintMBSlide);
		return exisintMBSlide;
	}
//	삭제 부분
	
	public void deleteNewItem(long id) {
		newitemRepository.findById(id).orElseThrow(()-> null);
		newitemRepository.deleteById(id);
	}
	
	public void deleteBestItem(long id) {
		bestitemRepository.findById(id).orElseThrow(()->null);
		bestitemRepository.deleteById(id);
	}
	
	public void deleteShoes(long id) {
		shoesRepository.findById(id).orElseThrow(()->null);
		shoesRepository.deleteById(id);
	}
	
	public void deleteAcc(long id) {
		accRepository.findById(id).orElseThrow(()->null);
		accRepository.deleteById(id);
	}
	
	public void deleteThe8(long id) {
		the8Repository.findById(id).orElseThrow(()->null);
		the8Repository.deleteById(id);
	}
	
	public void deleteMBSlide(long id) {
		mbslideRepository.findById(id).orElseThrow(()->null);
		mbslideRepository.deleteById(id);
	}
//	구매
	
	@Override
	public Purchase savePurchase(Purchase purchase) {
		return purchaseRepository.save(purchase);
	}

	@Override
	public List<Purchase> getAllPurchase(){
		return purchaseRepository.findAll();
	}




}
