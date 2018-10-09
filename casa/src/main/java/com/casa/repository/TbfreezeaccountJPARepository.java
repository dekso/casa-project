package com.casa.repository;

import com.casa.model.Tbfreezeaccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by saoDG on 9/3/2018.
 */
@Repository
public interface TbfreezeaccountJPARepository extends JpaRepository<Tbfreezeaccount, Integer> {

    Tbfreezeaccount save(Tbfreezeaccount data);
    Tbfreezeaccount findTbfreezeaccountById(Integer id);

}
