package com.dw.teamproject.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.dw.teamproject.model.NewItem;

public interface NewItemRepository extends JpaRepository<NewItem, Long> {


}
