package com.casa.repository;

import com.casa.model.Tblogs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
/**
 * Created by ETEL-COMP05 on 10/2/2018.
 */
@Repository
public interface TblogsJPARepository extends JpaRepository<Tblogs, Integer> {

    List<Tblogs> findAllByCurrentdate(Date currentdate);
    List<Tblogs> findAll();
    Tblogs findTopById(Integer id);
}
