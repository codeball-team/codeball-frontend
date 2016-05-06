package com.codete.codeball.repositories;

import com.codete.codeball.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    Long countByLastName(@Param("lastName") String lastName);

}
