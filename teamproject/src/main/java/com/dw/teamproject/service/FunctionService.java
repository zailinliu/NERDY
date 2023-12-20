package com.dw.teamproject.service;

import java.util.List;

import com.dw.teamproject.model.Acc;
import com.dw.teamproject.model.BestItem;
import com.dw.teamproject.model.Lookbook;
import com.dw.teamproject.model.MBSlide;
//import com.dw.teamproject.dto.SearchDto;
import com.dw.teamproject.model.NewItem;
import com.dw.teamproject.model.Purchase;
import com.dw.teamproject.model.Shoes;
import com.dw.teamproject.model.The8;

public interface FunctionService {

//	저장
	NewItem saveNewItem(NewItem newitem);
	BestItem saveBestItem(BestItem bestitem);
	Lookbook saveLookbook(Lookbook lookbook);
	Shoes saveShoes(Shoes shoes);
	Acc saveAcc(Acc acc);
	The8 saveThe8(The8 the8);
	MBSlide saveMBSlide(MBSlide mbslide);
//	목록
	List<NewItem> getAllNewItems();
	List<BestItem> getAllBestItems();
	List<Lookbook> getAllLookbooks();
	List<Shoes> getAllShoes();
	List<Acc> getAllAccs();
	List<The8> getAllThe8s();
	List<MBSlide> getAllMBSlides();
//	찾기
	NewItem getNewItemById(long id);
	BestItem getBestItemById(long id);
	Lookbook getLookbookById(long id);
	Shoes getShoesById(long id);
	Acc getAccById(long id);
	The8 getThe8ById(long id);
	MBSlide getMBSlideById(long id);
//	생성
	NewItem updateNewItemById(NewItem newitem, long id);
	BestItem updateBestItemById(BestItem bestitem, long id);
	Lookbook updateLookbookById(Lookbook lookbook, long id);
	Shoes updateShoesById(Shoes shoes, long id);
	Acc updateAccById(Acc acc, long id);
	The8 updateThe8ById(The8 the8, long id);
	MBSlide updateMBSlideById(MBSlide mbslide,long id);
	
//	삭제
	void deleteNewItem(long id);
	void deleteBestItem(long id);
	void deleteShoes(long id);
	void deleteAcc(long id);
	void deleteThe8(long id);
	void deleteMBSlide(long id);
	
	Purchase savePurchase(Purchase purchase);
	List<Purchase> getAllPurchase();
	
	
	
	
    /**
     * 게시글 리스트 조회
     * @return 게시글 리스트
     */
//    List<Form> getAllsearch(SearchDto params);

    /**
     * 게시글 수 카운팅
     * @return 게시글 수
     */
//    int count(SearchDto params);
}
