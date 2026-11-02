package com.aiupskillingplatform.repositories;

import com.aiupskillingplatform.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
}
