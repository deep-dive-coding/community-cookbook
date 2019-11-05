<?php
namespace TheDeepDiveDawgs\CommunityCookbook\Test;
use TheDeepDiveDawgs\CommunityCookbook\CommunityCookbookTest;
use TheDeepDiveDawgs\CommunityCookBook\{
		User, Category, Recipe, Interaction
};

//grab class under scrutiny
require_once(dirname(__DIR__) . "autoload.php");

//grab the uuid generator
require_once(dirname(__DIR__, 2) . "/lib/uuid.php");

/*
 * Full PHP unit test for the interaction class
 *
 * This is a complete unit test for the interaction class, complete due to all mySQL/PDO
 * enable methods are tested valid and invalid inputs
 *
 * @see interaction
 *
 * @author Daniel Hernandez
 */

class InteractionTest extends CommunityCookbookTest {

	/**
	 * User that created the Interaction, this is for foreign key relations
	 * @var User $user
	 **/

	protected $user = null;

	/**
	 * valid user hash to create the user object to own the test
	 * @var $VALID_HASH
	 */

	protected $VALID_USER_HASH;

	/**
	 * Recipe that the Interaction was based on, this is for foreign key relations
	 * @var Recipe $user
	 */

	protected $recipe = null;

	/**
	 *timestamp of interaction; this starts at null and is assigned later
	 * @var \DateTime $VALID_INTERACTIONDATE
	 */

	protected $VALID_INTERACTIONDATE = null;

	/**
	 * valid timestamp to use as sunriseInteractionDate
	 */

	protected $VALID_SUNRISEDATE = null;

	/**
	 * valid timestamp to use as sunsetInteractionDate
	 */

	protected $VALID_SUNSETDATE = null;

	/**
	 * rating of interaction
	 * @var int $VALID_INTERACTIONRATING
	 */

	protected $VALID_INTERACTIONRATING = "PHPUnit Test Passing";

	/**
	 * content of updated rating
	 * @var int $VALID_INTERACTIONRATING2
	 */

	protected $VALID_INTERACTIONRATING2 = "PHPUnit Test Still Passing";

	/**
	 * create dependent objects before running each test
	 */

	public final function setUp() : void {
		//run default setUp() method first
		parent::setUp();
		$password ="abc123";
		$this->VALID_USER_HASH = $password_hash($password, PASSWORD_ARGON2I, ["time_cost" => 384]);

		//create and insert User to own the test Interaction
		$this->VALID_INTERACTIONDATE = new User(generateUuidV4(), null);
	}
}