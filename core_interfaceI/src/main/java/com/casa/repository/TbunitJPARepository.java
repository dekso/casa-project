package com.casa.repository;

import com.casa.model.Tbunit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by saoDG on 5/16/2018.
 */
@Repository
public interface TbunitJPARepository extends JpaRepository<Tbunit, Long> {

}
