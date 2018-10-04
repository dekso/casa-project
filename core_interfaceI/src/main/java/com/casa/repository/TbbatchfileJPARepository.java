package com.casa.repository;

import com.casa.model.Tbbatchfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by saoDG on 9/17/2018.
 */
public interface TbbatchfileJPARepository extends JpaRepository<Tbbatchfile, Integer> {

    Tbbatchfile save(Tbbatchfile tbbatchfile);
    Tbbatchfile findById(Integer id);
    List<Tbbatchfile> findAll();
    List<Tbbatchfile> findAllByBatchstatus(Integer batchstatus);

}
