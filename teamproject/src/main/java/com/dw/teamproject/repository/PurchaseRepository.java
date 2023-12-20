package com.dw.teamproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dw.teamproject.model.Purchase;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {

}